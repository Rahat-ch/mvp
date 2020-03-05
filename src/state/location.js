import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

import { InitState, InvokeState, ErrorState, WaitState } from './common'
import { getCurrentPositionAsync, startLocationUpdatesAsync, Accuracy } from 'expo-location'
import { getItemAsync, setItemAsync } from 'expo-secure-store'
import { defineTask } from 'expo-task-manager'
import {Notifications} from 'expo'

const BACKGROUND_LOCATION = 'BACKGROUND_LOCATION'

defineTask(BACKGROUND_LOCATION, async ({ data, error }) => {
    if (error) {
        console.error(error)
        // Error occurred - check `error.message` for more details.
        return;
    }
    if (data) {
        const { locations : [location] } = data;
        const last = JSON.parse((await getItemAsync('last_location')) || "{}")
        const { timestamp = 0 } = last
        console.log('time', location.timestamp - timestamp)
        if (location.timestamp - timestamp > 10000){
            await setItemAsync('last_location', JSON.stringify(location))
            Notifications.presentLocalNotificationAsync({
                title: `wash your hands`,
                body: `it's been 10 seconds`
            })
        }
        // do something with the locations captured in the background
    }
})

export const LocationMachine = ({
    id = `location_${Math.random()}`,
    gpsOptions = {},
} = {}) => Machine({
    id,
    initial: 'init',
    states: {
        init: InitState({
            START: 'background'
        }),
        background: InvokeState({
            src: async () => await startLocationUpdatesAsync(BACKGROUND_LOCATION, {
                accuracy: Accuracy.Balanced,
            }),
            target: 'locate'
        }),
        locate: InvokeState({
            src: async ({ gpsOptions }) => ({
                gps: await getCurrentPositionAsync(gpsOptions)
            }),
            target: 'display'
        }),
        display: WaitState({
            on: {
                LOCATE: 'locate'
            }
        }),
        error: ErrorState()
    }
}).withContext({
    gpsOptions
})

export const LocationService = (options) => {
    const [state, send] = useMachine(LocationMachine(options))
    const actions = {
        locate: () => send('LOCATE')
    }

    return ({ state, actions })
}