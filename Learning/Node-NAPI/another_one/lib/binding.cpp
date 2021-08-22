
#include <napi.h>
#include <iostream>
#include <fmt/format.h>

void greet(const Napi::CallbackInfo& info) {
    auto env = info.Env();
    int t = 10;
    fmt::print("Hello from C++ with fmt lib ! {}\n", t);
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    exports.Set("greet", Napi::Function::New(env, ::greet));
    return exports;
}

NODE_API_MODULE(napimodule, InitAll)