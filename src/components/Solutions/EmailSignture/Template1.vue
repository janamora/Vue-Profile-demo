<template>
<div id="signature-preview" class="o-signature-preview u-mr-b4">
  <div>
    <!---->
    <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.4px;">
      <tr>
        <td style="margin: 0.1px; padding: 0px;">
          <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td width="139" valign="top" style="margin: 0.1px; padding: 0px 9px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                <img :src="profilePictureSrc" width="139" alt="created with MySignature.io" style="display: block;">
              </td>
              <td valign="top" style="border-left: 2px solid rgb(246, 68, 64); margin: 0.1px; padding: 0px 0px 0px 9px;">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="margin: 0.1px; padding: 0px; font: 17.3px / 22px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                      <span style="font: 17.3px / 22px Verdana, Geneva, sans-serif; color: rgb(246, 68, 64); cursor: pointer;">{{textinputFullName}}111</span>
                      <!---->
                      <span style="font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;"></span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0.1px; padding: 5px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                      <span style="cursor: pointer;">your pop music guide</span>
                      <!---->
                      <!---->
                    </td>
                  </tr>
                  <tr style="cursor: pointer;">
                    <td style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                      <span style="color: rgb(0, 0, 1);">w:&nbsp;</span>
                      <a href="https://mysignature.io/" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</a>
                    </td>
                  </tr>
                  <tr style="cursor: pointer;">
                    <td style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                      <span style="color: rgb(0, 0, 1);">e:&nbsp;</span>
                      <a href="mailto:collab@mysignature.io" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">collab@mysignature.io</a>
                    </td>
                  </tr>
                  <!---->
                  <tr>
                    <td style="margin: 0.1px; padding: 8px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                      <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                          <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                            <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 27px; height: 27px; text-align: center; background-color: rgb(255, 255, 255); font-size: 12px;">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
                                <path d="M519.85 160.015c0.849 0.003 1.763 0.006 2.74 0.009l10.445 0.047c32.116 0.171 97.222 0.754 168.688 2.734l17.984 0.525 18.156 0.587c3.035 0.103 6.074 0.209 9.114 0.317l18.242 0.685c36.455 1.44 72.559 3.302 104.981 5.708 20 2.453 63.6 2.657 102.6 44.352 30.8 31.68 40.8 103.829 40.8 103.829v0l0.268 2.306c1.612 14.109 9.951 90.704 10.132 167.131v0 79.302c0 84.821-10.2 169.437-10.2 169.437s-10 72.149-40.8 103.829c-39 41.695-82.6 41.899-102.6 44.352-24.317 1.77-50.71 3.251-77.773 4.491l-18.126 0.791c-3.032 0.126-6.069 0.249-9.108 0.37l-18.25 0.689c-97.327 3.504-193.246 4.282-224.543 4.448l-5.095 0.025c-0.718 0.003-1.369 0.006-1.951 0.008h-4.71c-19.049-0.186-268.198-2.748-347.044-10.413-22.8-4.497-74-3.066-113-44.761-30.6-31.68-40.6-103.829-40.6-103.829s-10.2-84.821-10.2-169.437l0.031-87.507c0.349-46.459 3.568-92.038 6.292-122.816l0.935-10.225c1.356-14.348 2.462-24.089 2.82-27.157l0.122-1.034c0 0 9.8-72.149 40.6-103.829 39-41.695 82.6-41.899 102.6-44.352 29.721-2.206 62.534-3.954 95.877-5.339l27.346-1.054c88.16-3.149 175.135-3.956 213.942-4.163l10.445-0.047c0.977-0.003 1.891-0.006 2.74-0.009zM406 369.702v294.114l276.6-146.546-276.6-147.568z" fill="#F64440"></path>
                              </svg>
                            </a>
                          </td>
                          <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                            <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 27px; height: 27px; text-align: center; background-color: rgb(255, 255, 255); font-size: 12px;">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
                                <path d="M520.281 33.802c42.199 0 185.291 11.765 252.766 162.87 22.549 50.851 17.178 137.21 12.745 206.603l-0.128 2.558c-0.512 7.673-0.938 14.706-1.279 21.739 3.197 1.918 8.653 3.836 17.092 3.836 12.788-0.682 28.090-5.115 44.032-12.83 7.033-3.751 14.663-4.433 19.778-4.433 7.757 0 15.302 1.236 21.696 3.836 19.181 6.351 31.286 20.417 31.286 35.72 0.639 19.138-16.624 35.762-51.705 49.786-3.793 1.236-8.908 3.197-14.663 5.072-19.181 5.754-48.55 15.345-56.82 34.526-3.836 9.548-2.6 22.335 5.115 36.999l0.639 0.639c2.558 5.797 65.045 148.122 204.217 171.097 10.869 1.875 18.542 11.509 17.903 21.696 0 3.197-0.639 6.351-1.918 9.591-10.23 24.253-54.262 42.114-134.098 54.176-2.515 3.879-5.115 15.984-6.99 24.296-1.236 7.63-3.154 15.345-5.711 23.572-3.24 11.552-11.509 17.263-23.657 17.263h-1.279c-5.754 0-13.342-1.322-22.933-3.154-15.345-3.197-32.608-5.754-54.262-5.754-12.788 0-25.532 0.639-38.917 3.154-25.575 4.433-47.868 19.778-73.443 37.68-36.359 25.532-77.833 54.901-140.407 54.901-2.558 0-5.072-0.639-7.673-0.639h-6.351c-62.574 0-103.451-28.772-139.768-54.901-25.532-17.903-47.186-33.205-72.761-37.68-13.384-1.918-26.811-3.154-39.556-3.154-23.018 0-40.835 3.793-54.219 6.351-8.994 1.833-16.667 3.154-23.018 3.154-15.941 0-22.293-9.548-24.851-17.903-2.6-8.184-3.836-16.581-5.754-24.168-1.961-7.715-4.476-21.056-7.076-24.296-81.755-9.463-125.744-27.365-135.931-52.258-1.322-2.685-2.217-6.394-2.345-9.591-0.639-10.358 7.033-19.821 17.903-21.696 139.128-23.018 201.616-165.343 204.217-171.353l0.682-1.236c7.673-14.706 9.548-27.493 5.072-37.041-8.312-18.499-37.68-28.048-56.777-34.483-5.158-1.236-10.23-3.154-14.749-5.072-47.186-18.542-53.58-39.641-51.022-54.262 3.836-20.417 28.729-33.802 49.786-33.802 6.223 0 11.509 1.236 16.325 3.154 17.903 8.269 33.631 12.788 47.058 12.788 9.974 0 16.368-2.558 19.821-4.476l-1.961-24.253c-4.177-69.308-9.591-155.624 13.086-206.178 65.6-150.338 208.266-161.847 250.379-161.847l17.86-0.639h2.558l0.004 0.042z" fill="#F64440"></path>
                              </svg>
                            </a>
                          </td>
                          <td style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                            <a href="https://mysignature.io/" target="_blank" style="display: block; border-radius: 15%; width: 27px; height: 27px; text-align: center; background-color: rgb(255, 255, 255); font-size: 12px;">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
                                <path d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z" fill="#F64440"></path>
                              </svg>
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
      <tr>
        <td style="margin: 0.1px; padding: 15px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
          <a href="https://mysignature.io/" target="_blank">
            <img :src="businessPictureSrc" valign="top" width="337" alt="created with MySignature.io" style="display: block;">
          </a>
        </td>
      </tr>
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
        methods:{
            CopyToClipboard (element) {
                    var doc = document
                    , text = doc.getElementById(element)
                    , range, selection;
                
                if (doc.body.createTextRange)
                {
                    range = doc.body.createTextRange();
                    range.moveToElementText(text);
                    range.select();
                } 
                
                else if (window.getSelection)
                {
                    selection = window.getSelection();        
                    range = doc.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                document.getElementById("btn").value="Copied";
            }
        }
    }
</script>