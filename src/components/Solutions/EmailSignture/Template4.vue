<template>
<div id="signature-preview" class="o-signature-preview u-mr-b4">
  <div>
    <!---->
    <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.4px;">
      <tr>
        <td style="margin: 0.1px; padding: 0px;">
          <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td valign="middle" style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;">
                <img :src="profilePictureSrc" width="133" alt="created with MySignature.io" style="display: block;">
              </td>
              <td width="37" valign="middle" style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;">
                      <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(133, 68, 22); font-size: 12px;">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 4.4px; width: 13.2px;">
                          <path d="M1024 194.799c-28.589 41.6-64.324 78.65-105.258 108.551 0.649 9.1 0.649 18.2 0.649 27.3 0 277.55-211.167 597.351-597.117 597.351-118.903 0-229.36-34.45-322.274-94.25 16.893 1.95 33.137 2.6 50.68 2.6 98.112 0 188.426-33.15 260.548-89.7-92.264-1.95-169.584-62.4-196.223-145.6 12.995 1.95 25.99 3.25 39.634 3.25 18.842 0 37.685-2.6 55.228-7.15-96.162-19.5-168.284-104.001-168.284-206.050v-2.6c27.939 15.6 60.427 25.35 94.863 26.651-56.528-37.7-93.564-102.050-93.564-174.85 0-39 10.396-74.75 28.589-105.95 103.309 127.4 258.599 210.6 432.73 219.7-3.249-15.6-5.197-31.85-5.197-48.1 0-115.7 93.564-209.95 209.867-209.95 60.427 0 115.005 25.35 153.34 66.3 47.431-9.1 92.913-26.651 133.198-50.7-15.594 48.75-48.731 89.7-92.264 115.7 42.234-4.55 83.168-16.25 120.854-32.5v-0.002z" fill="#ffffff"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;">
                      <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(133, 68, 22); font-size: 12px;">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 4.4px; width: 13.2px;">
                          <path d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z" fill="#ffffff"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;">
                      <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(133, 68, 22); font-size: 12px;">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 4.4px; width: 13.2px;">
                          <path d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z" fill="#ffffff"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="middle" style="margin: 0.1px; padding: 0px;">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="margin: 0.1px; padding: 0px 0px 2px; font: 600 17.3px / 22px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(133, 68, 22); cursor: pointer;"> Joey Hope </td>
                  </tr>
                  <tr>
                    <td style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                      <span style="cursor: pointer;">Lawyer</span>&nbsp;at&nbsp; <span style="cursor: pointer;">Jurisk</span>
                    </td>
                  </tr>
                  <tr style="cursor: pointer;">
                    <td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                      <!---->
                      <a href="tel:3942-600-39" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">3942-600-39</a>,&nbsp;
                      <!---->
                      <a href="tel:3242-404-36" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">3242-404-36</a>
                    </td>
                  </tr>
                  <tr style="cursor: pointer;">
                    <td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                      <!---->
                      <a href="mailto:hope@mysignature.io" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">hope@mysignature.io</a>
                      <!---->
                      <!---->
                    </td>
                  </tr>
                  <tr style="cursor: pointer;">
                    <td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                      <!---->
                      <a href="https://mysignature.io/" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">mysignature.io</a>
                      <!---->
                      <!---->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!---->
    </table>
  </div>
</div>
</template>
<!-- Template.vue -->
<script>
    export default {
       name: "FormData",
          props: {
            profilePictureSrc: String,
            businessPictureSrc: String,
            textinputFullName: String,
            textinputDescription: String,
            textinputAddress: String,
            textinputPhoneNumber: String,
            textinputEmail: String,
            textinputWebUrl: String,
            textinputfacebookUserName: String,
            textinputinstagramUserName: String,
            textinputyoutubeUserName: String,
            textinputtiktokUserName: String,
          },
          created: function () {
            console.log('user data from parent component:')
            console.log(this.name) //prints out an empty string
        },
    }
</script>