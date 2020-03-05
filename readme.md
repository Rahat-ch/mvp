# CoEpi MVP

This repo is a bare-bones MVP for CoEpi. 

## Testing

In order to help test this app, you'll need the expo client app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [iOS](https://itunes.apple.com/app/apple-store/id982107779)

Once you have the Expo App, you should be able to open the [latest version](https://expo.io/@rynomad/coepi-mvp) on your phone

**Note:** It is possible that as we develop background features, iOS users will need to sideload a special version of the expo client. These instructions will be updated when that becomes a requirement.

## Development

Ensure that you have the latest versions of NodeJS and Yarn installed.

```bash
$ yarn global add expo-cli
$ git clone git@github.com:Co-Epi/mvp
$ cd mvp
$ yarn
$ expo start
```

The `expo start` command will start a daemon to watch files for changes and rebuild, and it will launch your default webbrowser with a dashboard containing, among other things, options to open the app in iOS/Android simulators or on a physical device via scanned QR code. 

**Note:** When using a physical device, you'll need the expo client app installed (see *testing* above). Also; be sure that you're dev machine and phone are both on the same LAN (if this is not possible, expo also offers a tunneling option, but LAN is the default and is faster).

## Design
### Libraries
- [ExpoKit](https://docs.expo.io/versions/latest/) Easy access to many cross-platform native features
- [NativeBase](https://nativebase.io) UI components with a native feel for both iOS & Android
- [xstate](https://xstate.js.org/docs/) State management via finite state machines
- [react-navigation](https://reactnavigation.org/) for screen navigation

### Directory structure
- App.js - pre-boot App entrypoint
- app.json - expo build configuration
- assets/ - static assets (images)
- src/ 
    - App.js - post-boot App entrypoint
    - boot.js - boot screen
    - theme/ - tons of styling for NativeBase
    - state/ - state machine definitions
    - components/ - UI & feature building blocks 
    - screens/ - app screens




