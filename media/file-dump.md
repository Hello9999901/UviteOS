Just for notes and reference.

Run function on start:
Run JS script on window load:
``` html
<script>
function myFunction() {
    alert('ok');
}
window.onload = myFunction;
</script>
```
–––––––––––––––––––––––––––––––––––––––––––––––––––––
Declare CSS variables:
``` css
:root {} - declare globally
Usage Ex:
:root {
  --white: #fff; (declare var)
}
body { background-color: var(--white); } (use var)
```
–––––––––––––––––––––––––––––––––––––––––––––––––––––
interact.js click, db click, and hold:
``` html
<div class="tap-target">
  <p>Tap to change color</p>
  <p>Doubletap to change size</p>
  <p>Hold to rotate</p>
</div>
<style>
  .tap-target {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 16em;
    height: 16em;
    padding: 1em;
    margin: 1rem auto;
    box-sizing: border-box;

    border-radius: 100%;

    font-size: 1.125em;
    text-align: center;
    color: #fff;
    background-color: #29e;

    cursor: pointer;
    touch-action: none;
    user-select: none;

    transition: all 0.3s;
  }

  .tap-target.switch-bg {
    background-color: #f40;
  }

  .tap-target.large {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }

  .rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
<script>
interact('.tap-target')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg')
    event.preventDefault()
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large')
    event.currentTarget.classList.remove('rotate')
    event.preventDefault()
  })
  .on('hold', function (event) {
    event.currentTarget.classList.toggle('rotate')
    event.currentTarget.classList.remove('large')
  })
</script>
```