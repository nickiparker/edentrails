/// <reference path="WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      /** Enter your Wikitude (trial) License Key here. You can register and download your free license key here: http://www.wikitude.com/developer/licenses */      
      WikitudePlugin._sdkKey = "qi1z/nDbGmh0beDaNgo39/1Bbeh8qoqCIZ2EBctf9rZx3wORq7E5NZp7xk+wnuYRVNRiw92Y75JLmIDaCv0l8V6aRMpkfXR5uUeX65EkLa6Yyywk0oHoJNmvy32zac2jLPrCVrIzYFNLOcX6oBMPIXsKSMfUNDRtd9r4KwgrUk5TYWx0ZWRfX+PdIuWzDNYfyGgJjit/0nW0Aca5uCxZQJEbocoAZerW2/HkQBckRo+NQ1wRf9PXEb4Ma4B+1xSNEX65AiPGyw5S7+tCnFwoTRj+T4zniqq01EsBHHAHsHxKfJVhk39YDbSWkrk3XoH7TeR/GzQaX5nRJu29y9Jw5KvtOEVdoYNOMgDDuIE6m0r1kskJW2fxnrQLPzHuzLUaTBBNgnvZsxR2aEkHOyG8sbKX2J9ZQqJKdbWjyt1f6hg2kweBuGCcmKYo12GvcQ3W0tEGsiHrS0bwDkTS+qJ/lPbwf7kzO+lcEbDvDFEFSJWV8QZXRtK4aaOrkfPFORdfnY1qUTPWW8KVSxeaaqcjH7noG9fD2QQCYy1NK4XDU/gmXY9x5gpW7CUBTx/n8YMaFqwWJEmxCKzxTllllIcNipTPE/MZedYYAOAngtDVw5/ustOgIGjAsatPUrnHIeylh2avsIGzt5HFU1+ZQ4jnRrEOSIylLrdyCeN4I+7vt04=";

      /** Check if your device supports AR */
      WikitudePlugin.isDeviceSupported(
          function(success) {
            console.log("Your platform supports AR/Wikitude. Have fun developing!!");
          },
          function(fail) {
            console.log("Your platform failed to run AR/Wikitude: "+fail);
          },
          [WikitudePlugin.FeatureGeo] // or WikitudePlugin.Feature2DTracking 
      );                  

      /** The Wikitude AR View creates it's own context. Communication between the main Ionic App and Wikitude SDK works 
       * through the function below for the direction Ionic2 app --> Wikitude SDK 
       * For calls from Wikitude SDK --> Ionic2 app see the captureScreen example in 
       * WikitudeIonic2StarterApp/www/assets/3_3dModels_6_3dModelAtGeoLocation/js/3dmodelatgeolocation.js*/
      // set the function to be called, when a "communication" is indicated from the AR View  
      WikitudePlugin.setOnUrlInvokeCallback(function(url) {

        // this an example of how to receive a call from a function in the Wikitude SDK (Wikitude SDK --> Ionic2)
        if (url.indexOf('captureScreen') > -1) {
            WikitudePlugin.captureScreen(
                (absoluteFilePath) => {
                    console.log("snapshot stored at:\n" + absoluteFilePath);

                    // this an example of how to call a function in the Wikitude SDK (Ionic2 app --> Wikitude SDK)
                    WikitudePlugin.callJavaScript("World.testFunction('Screenshot saved at: " + absoluteFilePath +"');");
                },
                (errorMessage) => {
                    console.log(errorMessage);
                },
                true, null
            );
        } else {
            alert(url + "not handled");
        }
      });

      /**
       * Define the generic ok callback
       */
      WikitudePlugin.onWikitudeOK = function() {
          console.log("Things went ok.");
      }
      
      /**
       * Define the generic failure callback
       */
      WikitudePlugin.onWikitudeError = function() {
          console.log("Something went wrong");
      }

      // Just as an example: set the location within the Wikitude SDK, if you need this (You can get the geo coordinates by using ionic native 
      // GeoLocation plugin: http://ionicframework.com/docs/v2/native/geolocation/
      //WikitudePlugin.setLocation(47, 13, 450, 1);
      /* for Android only
      WikitudePlugin.setBackButtonCallback(
          () => {
              console.log("Back button has been pressed...");
          }
      );                  
      */

    });
  }
}