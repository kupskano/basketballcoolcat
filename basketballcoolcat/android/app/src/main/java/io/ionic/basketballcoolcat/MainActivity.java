package io.ionic.basketballcoolcat;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.kaiguanjs.SplashLietener;
import com.kaiguanjs.utils.YQCUtils;

import java.util.ArrayList;
import android.widget.Toast;

public class MainActivity extends BridgeActivity {
  int counter;
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    YQCUtils.splashAction(this, new SplashLietener() {
      @Override
      public void startMySplash(int version, String downUrl) {

      }
    });
    counter = 0;
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }

  @Override
  public void onBackPressed() {
    if(counter > 0) {
      finish();
    }else {
      counter++;
      Toast.makeText(this, "Press back to exit", Toast.LENGTH_SHORT).show();
    }
  }
}
