package com.thridpartypractice;
import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ThridPartyPractice";
  }

   @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);

    Intent intent = getIntent();
   
    if (Intent.ACTION_VIEW.equals(intent.getAction())) {
      // Extract the deep link URL
      String deepLink = intent.getDataString();

      // Use the deep link to navigate to the appropriate screen using React Navigation
      navigateToScreen(deepLink);
    }
  }

    private void navigateToScreen(String deepLink) {
    // Add your React Navigation logic to navigate to the appropriate screen based on the deep link URL
    // For example, you can use a switch statement to handle different deep link patterns
    if (deepLink.equals("http://myapp/profile")) {
      Intent newIntent = new Intent(this, MainActivity.class);
      newIntent.putExtra("screen", "Profile");
      startActivity(newIntent);
    }
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
