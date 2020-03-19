import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Settings from './screens/settings'
import Location from './screens/location'
import HygieneTips from './screens/hygiene-tips'
import Welcome from './screens/welcome'

import { TabBarIcon } from './components/ui'


export default createAppContainer(
    createBottomTabNavigator({
        Welcome,
        Location,
        Settings,
        "Hygiene Tips": HygieneTips,
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: TabBarIcon(navigation)
        }),
    }),
)
