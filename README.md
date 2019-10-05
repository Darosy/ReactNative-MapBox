# ReactNative-MapBox

## Installation

+ npm i -S npm@react-native-mapbox-gl/maps 

## Setting your accessToken

In order to work, mapbox requires you to create an accessToken and set it in your app.  
If you haven't created on yet, make sure to sign up for an account [here](https://www.mapbox.com/signup/)  
You can create and manage your access tokens on your [Mapbox Account page](https://www.mapbox.com/account/)  
Once you have your accessToken, set it like this

```js
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("<YOUR_ACCESSTOKEN>");
```

## Setting gradle

1. Check di android/build.gradle
   ```js
   allprojects {
    repositories {
        mavenLocal()
        google()
        jcenter()
      + maven { url "https://jitpack.io" }
        maven {
        // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
     }
   }
   ```

2. Check Buildscript, sesuaikan dengan format dibawah ini.
   
   ```js
   buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        compileSdkVersion = 28
        targetSdkVersion = 28
    }
   }
   ```
   
3. Check Dependencies gradle. pastikan format seperti dibawah ini. 

   ```js
   android/app/build.gradle
   dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
   +implementation project(':@react-native-mapbox-gl_maps')
   }

4. android/setting.gradle

  ``` js
   rootProject.name = <YOUR_PROJECT_NAME>

   + include ':@react-native-mapbox-gl_maps'
   + project(':@react-native-mapbox-gl_maps').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-mapbox-gl/maps/android/rctmgl')

   include ':app'
   ```
