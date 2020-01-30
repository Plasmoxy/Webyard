#include <napi.h>
#include <string>
#include "greeting.hpp"

using namespace Napi;

String js_helloUser(const CallbackInfo& info) {
    Env env = info.Env();
    std::string result = helloUser("Sebu");
    return String::New(env, result);
}

Object Init(Env env, Object exports) {
    
    exports.Set(
        "helloUser",
        Function::New(env, ::js_helloUser)
    );

    return exports;
}

NODE_API_MODULE(again_wbt, Init)