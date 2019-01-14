import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import screnshot from './screnshot.png'


export const App = () => <div className="container pt-2">
    <h2>Some title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Donec et odio pellentesque diam. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Ultrices gravida dictum fusce ut placerat orci. Gravida rutrum quisque non tellus. Commodo quis imperdiet massa tincidunt nunc. Faucibus vitae aliquet nec ullamcorper sit. Hendrerit dolor magna eget est lorem ipsum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Interdum consectetur libero id faucibus nisl tincidunt. Ac placerat vestibulum lectus mauris ultrices eros in cursus. In hac habitasse platea dictumst vestibulum rhoncus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.

Morbi non arcu risus quis varius quam quisque id. Neque sodales ut etiam sit amet nisl purus in. Sed viverra ipsum nunc aliquet. Etiam non quam lacus suspendisse faucibus. Diam donec adipiscing tristique risus nec feugiat. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Vitae congue mauris rhoncus aenean vel elit. Gravida neque convallis a cras semper auctor neque vitae tempus. Amet est placerat in egestas erat imperdiet sed. Tristique senectus et netus et malesuada fames ac turpis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Id faucibus nisl tincidunt eget nullam non. Etiam sit amet nisl purus in mollis nunc sed. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Massa placerat duis ultricies lacus sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Aliquet bibendum enim facilisis gravida neque convallis. A erat nam at lectus.

Risus nec feugiat in fermentum posuere urna nec. Et ultrices neque ornare aenean euismod elementum. Sed tempus urna et pharetra pharetra. Dapibus ultrices in iaculis nunc sed augue. Condimentum mattis pellentesque id nibh tortor id. Ac tincidunt vitae semper quis. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Bibendum arcu vitae elementum curabitur vitae nunc. Lectus sit amet est placerat in. Amet mauris commodo quis imperdiet massa tincidunt. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Orci dapibus ultrices in iaculis. Ac odio tempor orci dapibus ultrices. Interdum posuere lorem ipsum dolor sit. Egestas sed sed risus pretium quam vulputate dignissim. Malesuada nunc vel risus commodo viverra maecenas. Turpis nunc eget lorem dolor sed viverra ipsum. Suspendisse in est ante in nibh mauris. Egestas tellus rutrum tellus pellentesque.
</p>
    <img className="w-100 mb-4" src={screnshot}></img>
    <p>
    Nam aliquam sem et tortor consequat id porta. Ornare lectus sit amet est placerat in egestas erat. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sagittis purus sit amet volutpat consequat. Ultrices neque ornare aenean euismod elementum nisi. Id volutpat lacus laoreet non curabitur gravida. Elementum facilisis leo vel fringilla. Volutpat est velit egestas dui id ornare arcu odio ut. Mauris ultrices eros in cursus turpis. Blandit volutpat maecenas volutpat blandit.

Nec tincidunt praesent semper feugiat nibh sed. Tincidunt arcu non sodales neque sodales ut etiam. Ut pharetra sit amet aliquam id diam maecenas. Posuere morbi leo urna molestie at elementum. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Mi ipsum faucibus vitae aliquet nec ullamcorper. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Urna neque viverra justo nec ultrices dui sapien eget. Nullam eget felis eget nunc. Curabitur gravida arcu ac tortor. Diam sollicitudin tempor id eu nisl nunc. Duis convallis convallis tellus id. Lacus luctus accumsan tortor posuere ac ut consequat. Justo donec enim diam vulputate ut pharetra sit. In ante metus dictum at tempor commodo. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna nunc id cursus metus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Porttitor eget dolor morbi non.
    </p>
</div>

ReactDOM.render(
    <App />,
    document.getElementById("app")
)

module.hot.accept()