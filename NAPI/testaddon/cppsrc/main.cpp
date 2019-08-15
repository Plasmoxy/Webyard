#include <napi.h>
#include "samples/functionexample.hpp"
using namespace Napi;


double add(double a, double b) {
  return a + b;
}

Number _add(const CallbackInfo& info) {
  Env env = info.Env();

  double params[] = {
    info[0].As<Number>().DoubleValue(),
    info[1].As<Number>().DoubleValue()
  };

  return Number::New(env, add(params[0], params[1]));
}

Object InitAll(Env env, Object exports) {
  functionexample::Init(env, exports);
  exports.Set("add", Function::New(env, ::_add));
  return exports;
}

NODE_API_MODULE(testaddon, InitAll)