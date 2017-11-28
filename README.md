#### Eden Trails - Live Brief Module Project

Student project for MA Creative App Development with Falmouth University.

##### Tools

The Eden Trails AR prototype has been built with Ionic and the Wikitude Cordova SDK

#### Get started

1. Install Ionic: http://ionicframework.com/docs/intro/installation/
2. Clone the repository: git clone https://github.com/nickiparker/edentrails.git
3. Install the Wikitude Cordova Plugin
```$ ionic plugin add https://github.com/Wikitude/wikitude-cordova-plugin.git```
4. Get a free licence key from Wikitude: http://www.wikitude.com/developer/licenses
5. Copy your key and add it to the `src/app/app.component.ts` (search for WikitudePlugin._sdkKey=)
6. For iOS, open xcode, under Resources/WikitudeIonic2StarterApp-Info.plist add the following values:

NSCameraUsageDescription and in the value field enter something like like "This app needs the camera for Augmented Reality."
NSLocationWhenInUseUsageDescription, and a value like "This app needs your location for Geo AR"
NSPhotoLibraryUsageDescription, and a value like "This app needs to access your photo gallery such that you can share your screenshots"
7. To test on iOS, compile your project with: `$ ionic build ios`

Further details from https://github.com/pbreuss/wikitude-ionic-2-starter-app:

>Then you can open WikitudeIonic2StarterApp/platforms/ios/WikitudeIonic2StarterApp.xcodeproj with XCode, then you plug in you IOS device, then in XCode, on the top left, click WikitudeIonic2StarterApp, popup opens, choose your device, and then click the Build button (the triangle on the top left). When you are installing the app using XCode for the first time, you need to set a Team, under Project Settings --> General --> Signing --> Team, choose your Apple ID.
