package com.plasmoxy.lesimple;

import android.os.Bundle;
import android.view.View;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    
    

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  
    // disable overscrol and skrolbar on bridge after initializing bridge
    bridge.getWebView().setOverScrollMode(View.OVER_SCROLL_NEVER);
    bridge.getWebView().setVerticalScrollBarEnabled(false);
    
  }
}
