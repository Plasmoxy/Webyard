const addon = require('../build/Release/yogen-test-native');

interface IYogenTestNative
{
    greet(strName: string): string;
};

class YogenTest {
    constructor(name: string) {
        this._addonInstance = new addon.YogenTest(name)
    }

    greet (strName: string) {
        return this._addonInstance.greet(strName);
    }

    // private members
    private _addonInstance: IYogenTestNative;
}

export = YogenTest;
