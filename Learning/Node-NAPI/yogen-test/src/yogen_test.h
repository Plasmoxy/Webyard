#pragma once

#include <napi.h>

class YogenTest : public Napi::ObjectWrap<YogenTest>
{
public:
    YogenTest(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
