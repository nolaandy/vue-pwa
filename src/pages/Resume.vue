<template>
<div>
<SiteHeader ztitle='My Resume...'></SiteHeader>
  <div class="container single resume-container">
    <div class="posts">
      <article class="post">
        <h1 class="post-title">Resume</h1>
        <JaggedHr></JaggedHr>

      <div class="post-content resume-post-content">
        <div class="resume-left">
          <div class="resume-section-title">Education</div>
          <div class="employment-block">
            <div class="employment-year">2001-2005</div>
            <div class="employment-position">
              <div class="employment-location">Louisiana State University, Baton Rouge, LA</div>
              <div class="employment-duties">Graduated in May 2005.  Major: Liberal Arts
              </div>
            </div>
          </div>
          <div class="employment-block">
            <div class="employment-year">1997-2001</div>
            <div class="employment-position">
              <div class="employment-location">Jesuit High School, New Orleans, LA</div>
               <div class="employment-duties">Graduated in May 2001. It's where I took my 1st HTML class!
              </div>
            </div>
          </div>
        <div class="resume-section-title">Employment</div>
          <div class="employment-block">
            <div class="employment-year">2014-2017</div>
            <div class="employment-position">
              <div class="employment-location">Mopho Group, New Orleans, LA</div>
              <div class="employment-duties">Web Developer.  Designed 3 websites with Wordpress back-ends. Websites are responsively designed and tested on all devices. Content is easily updatable by the client.
              </div>
            </div>
          </div>
          <div class="employment-block">
            <div class="employment-year">2013-2016</div>
            <div class="employment-position">
              <div class="employment-location">Schollnick Advertising, Metairie, LA</div>
              <div class="employment-duties">Lead developer in web and graphic design. Programmed web pages using html, css, and javascript languages.  Designed banners, logos, and web page layouts using the Adobe Creative Suite. Responsible for client outreach as well as administering a network of dozens of websites.
              </div>
            </div>
          </div>
          <div class="employment-block">
            <div class="employment-year">2011-2017</div>
            <div class="employment-position">
              <div class="employment-location">Freelance Design, Greater New Orleans Area</div>
              <div class="employment-duties">Design modern responsive websites for all devices. Create branding, logos, and print materials for businesses. Consult clients on modern web development techniques.
              </div>
            </div>
          </div>
          </div> <!-- end resume-left -->
          <div class="resume-right">
          <div class="resume-section-title">Personal</div>
          <div class="employment-block">
            <div class="personal-section">
              <div class="personal-title">Special Skills</div>
              <div class="employment-duties">Skilled with PC and MAC computers including installing new hardware. Over 10 years of experience using the Adobe Creative Suite. Experienced in HTML5, CSS, jQuery, Javascript, Wordpress, SEO, Analytics, Social/AdWords Advertising, Github, Bootstrap, and more.
              </div>
            </div>
          </div>

          <div class="employment-block">
            <div class="personal-section">
              <div class="personal-title">Activites</div>
              <div class="employment-duties">Organize league signups for a local sports organization. Maintain a vegetable garden in my backyard. Create original music and record live music. Read books on Web Development and keep up with the trends.
              </div>
            </div>
          </div>

          <div class="employment-block">
            <div class="personal-section">
              <div class="personal-title">Interests</div>
              <div class="employment-duties">Computers, graphic design, gardening, music production, kickball.
              </div>
            </div>
          </div>

          <div class="resume-section-title">References</div>
          
          <div class="employment-block">
            <div class="personal-section">
              <div class="personal-title">Available on Request</div>
            </div>
          </div>
        </div> <!-- end resume-right -->
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<style>

@media (min-width:669px) {

.container.resume-container {
  max-width:704px;
}

.resume-post-content {
  display:flex;
}

.resume-left {
    margin-right: 30px;
}
}



.resume-section-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 24px;
    font-style: italic;
    line-height: 41px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    text-align: center;
    margin-bottom: 14px;
}

.employment-block {
    display: flex;
    align-items: baseline;
    margin-bottom: 14px;
}
.employment-year {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
}

.employment-position {
    padding-left: 15px;
}

.employment-location {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 16px;
    font-style: italic;
    line-height: 20px;
}

.employment-duties {
    font-size: 12px;
    line-height: 21px;
}

.personal-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 16px;
    font-style: italic;
    line-height: 20px;
}
</style>

<script>
  import SiteHeader from '../components/Header.vue'
  import JaggedHr from '../components/Elements/JaggedHr.vue'

  export default {
    components: {
      JaggedHr,
      SiteHeader
    },
    props: {
      ztitle: ''
    },
    created () {
      document.title = 'My Resume | Andrew Finney Weilbaecher'
    }
}
</script>