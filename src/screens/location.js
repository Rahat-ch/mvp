import React from 'react';
import { Container } from 'native-base'
import {Header} from '../components/ui'
import { PermissionedLocation, SetGeofence, GetLocation, WaitLocation, WaitMovementStop, WaitGeofenceExit } from '../components/location'
import {Text} from 'native-base'

export default () => (
    <Container>
        <Header 
            title="Location"
        />
        <PermissionedLocation>
            <GetLocation>
                <Text>Getting initial location</Text>
            </GetLocation>
            <WaitLocation>
                <Text>Waiting for Location TAG 8:37</Text>
            </WaitLocation>
            <WaitGeofenceExit>
                <Text>Waiting to Exit Geofence TAG 8:37</Text>
            </WaitGeofenceExit>
            <WaitMovementStop>
                <Text>Outside of geofence, waiting for movement to stop TAG 8:37</Text>
            </WaitMovementStop>
        </PermissionedLocation>
    </Container>
)
