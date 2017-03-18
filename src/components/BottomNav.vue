<template>
<div class="nav-wrapper">
<div class="triangles-above"></div>
<nav class="bottomNav">
<ul>
<router-link to="/about" active-class="active"><li>About</li></router-link>
<router-link to="/resume" active-class="active"><li>Resume</li></router-link>
<router-link to="/work" active-class="active"><li>Work</li></router-link>
<router-link to="/contact" active-class="active"><li>Contact</li></router-link>
</ul>
</nav>
</div>
</template>

<script>
  export default {

}
</script>


<style>

.active {
    transform: scale(1.4);
    transition: .3s;
    color: #ffd400!important;
}

.nav-wrapper {
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.triangles-above {
    background-image: url('../../static/images/triangle-solid.svg');
    height: 19px;
    background-repeat-y: no-repeat;
    outline: none;
    margin-bottom: -1px;
    margin-top: -1px;
}

nav.bottomNav {
background-color: #000;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px solid #ffd400;
}

nav.bottomNav>ul {
    padding: 0px 0px;
    display: flex;
    flex-basis: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
}

nav.bottomNav>ul>a {
    display: inline;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    font-size: 12px;
    font-style: italic;
    margin-left: 20px;
    flex: 1;
    color: #fff;
    text-transform: uppercase;
    text-decoration: underline;
    transition: .3s;
}

nav.bottomNav>ul>a>li:last-of-type {

    margin-right: 20px;

}


@media (min-width:768px) {

nav.bottomNav {
    height: 70px;
}
nav.bottomNav>ul>a {
    font-size: 22px;
}

} /*end MQ for 768 */

</style>