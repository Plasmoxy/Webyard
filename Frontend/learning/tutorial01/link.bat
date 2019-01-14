echo "Installing Babel..."
npm i -g babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2
echo "Installing Webpack..."
npm i -g webpack webpack-cli webpack-dev-server
echo "Installing React"
npm i -g react react-dom react-hot-loader

echo -e "\n[ LINKING NodeJS global libraries ]\n"
echo "Linking Babel..."
npm link --saveDev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2
echo "Linking Webpack..."
npm link --saveDev webpack webpack-cli webpack-dev-server
echo "Linking React..."
npm link --save react react-dom
npm link --saveDev react-hot-loader

echo -e "\n[DONE] Enjoy ! \n"