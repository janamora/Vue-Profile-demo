<template>
<div id="signature-preview" class="o-signature-preview u-mr-b4">
  <div>
    <!---->
    <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="margin: 0.1px; padding: 0px;">
          <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td valign="middle" style="margin: 0.1px; padding: 0px 15px 0px 7px; border-right: 2px solid rgb(99, 204, 200);">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="margin: 0.1px; padding: 0px 0px 10px; cursor: pointer;">
                      <img :src="profilePictureSrc" width="92" alt="created with MySignature.io" style="display: block;">
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="margin: 0.1px; padding: 0px; font: 200 18.1px / 23.1px Arial, Helvetica, sans-serif; color: rgb(99, 204, 200); cursor: pointer;">Marissa Golvits</td>
                  </tr>
                  <tr>
                    <td align="center" style="margin: 0.1px; padding: 2px 0px 0px; font: 200 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">Customer Success Manager</td>
                  </tr>
                  <tr>
                    <td align="center" style="margin: 0.1px; padding: 2px 0px 0px; font: 200 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;"> at Gravity</td>
                  </tr>
                </table>
              </td>
              <td valign="middle" style="margin: 0.1px; padding: 0px 0px 0px 15px;">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td>
                      <table cellpadding="0" style="border-collapse: collapse;">
                        <tr style="cursor: pointer;">
                          <td style="margin: 0.1px; padding: 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                            <span style="color: rgb(99, 204, 200); font-weight: 600;">A:&nbsp;&nbsp;</span>
                            <span style="color: rgb(0, 0, 1);">814 Mission Str 600</span>&nbsp;&nbsp; <span style="color: rgb(99, 204, 200); font-weight: 600;">T:&nbsp;&nbsp;</span>
                            <a href="tel:767 454 9876" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">767 454 9876</a>
                          </td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td style="margin: 0.1px; padding: 2px 0px 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                            <span style="color: rgb(99, 204, 200); font-weight: 600;">E:&nbsp;&nbsp;</span>
                            <a href="mailto:marissa@mysignature.io" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">marissa@mysignature.io</a>&nbsp;&nbsp;
                            <!---->
                            <a href="https://mysignature.io/" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">mysignature.io</a>
                          </td>
                        </tr>
                        <!---->
                        <tr>
                          <td style="margin: 0.1px; padding: 5px 0px 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                            <table cellpadding="0" style="border-collapse: collapse;">
                              <tr>
                                <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                  <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(99, 204, 200); font-size: 12px;">
                                  <img class="icon-preview" src="https://simpleicons.org/icons/facebook.svg" loading="lazy" alt="Facebook icon">
                                  </a>
                                </td>
                                <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                  <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(99, 204, 200); font-size: 12px;">
                                   <img class="icon-preview" src="https://simpleicons.org/icons/facebook.svg" loading="lazy" alt="Facebook icon">
                                  </a>
                                </td>
                                <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                  <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 22px; height: 22px; text-align: center; background-color: rgb(99, 204, 200); font-size: 12px;">
                                    <img class="icon-preview" src="https://simpleicons.org/icons/facebook.svg" loading="lazy" alt="Facebook icon">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
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