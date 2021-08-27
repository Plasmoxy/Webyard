#include <napi.h>
#include <iostream>

void greet(const Napi::CallbackInfo& info) {
    auto env = info.Env();
    std::cout << "Hello from cpp!" << std::endl;
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    exports.Set("greet", Napi::Function::New(env, ::greet));
    return exports;
}

NODE_API_MODULE(napimodule, InitAll)