<template>
        <div class="row justify-content-center">
         <div class="bg-primary col-12 mx-auto text-center text-white">
            <h1 class="display-4">Email Signature</h1>
            <p class="lead">Create email Signture fast and awesome</p>
        </div>

            <div div class="card  col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 ">

                <form class="form-horizontal">
                    <fieldset>
                        <ul class="nav nav-tabs">
                        <li class="nav-item active"><a class="nav-link" data-toggle="tab" href="#profile">Profile</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#social">Social</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#templates">Templats</a></li>

                        </ul>
                        
                        <div class="tab-content">
                        <div id="profile" class="container tab-pane fade in active show">

 
                        <!-- Form Name -->
                        <legend>
                            <h2>Profile</h2>
                        </legend>
                        <div class="row">
                            
                            <div class="col">
                                <label class="col-md-12 control-label" for="filebuttonImg">Profile Picture</label>
                                <div class="col-md-12">
                                    <input id="filebuttonImg" name="filebuttonImg" class="input-file" type="file"
                                        ref="fileProfilePictureInput" @input="uploadProfilePicture">
                                </div>
                            </div>
                             <div class="col">
                                <label class="col-md-12 control-label" for="filebusinessbuttonImg">Logo (optional)</label>
                                <div class="col-md-12">
                                    <input id="filebusinessbuttonImg" name="filebusinessbuttonImg" class="input-file" type="file"
                                        ref="fileInput" @input="uploadbusinessPicture">
                                </div>
                            </div>
                            <div class="col">
                                <label class="col-md-12 control-label" for="formObj.textinputFullName">Full Name</label>
                                <div class="col-md-12">
                                    <input v-model="formObj.textinputFullName" id="formObj.textinputFullName" name="formObj.textinputFullName"
                                        type="formObj.text" placeholder="Full Name" class="form-control input-md" >

                                </div>
                            </div>
                            <div class="col">
                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="formObj.textinputDescription">Description</label>
                                    <div class="col-md-12">
                                        <input v-model="formObj.textinputDescription" id="formObj.textinputDescription"
                                            name="formObj.textinputDescription" type="formObj.text" placeholder="Description"
                                            class="form-control input-md">

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="formObj.textinputAddress">Adress</label>
                                    <div class="col-md-12">
                                        <input v-model="formObj.textinputAddress" id="formObj.textinputAddress" name="formObj.textinputAddress"
                                            type="formObj.text" placeholder="Address" class="form-control input-md">

                                    </div>
                                </div>
                            </div>
                            <div class="col">

                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="formObj.textinputPhoneNumber">Phone
                                        Number</label>
                                    <div class="col-md-12">
                                        <input v-model="formObj.textinputPhoneNumber" id="formObj.textinputPhoneNumber"
                                            name="formObj.textinputPhoneNumber" type="formObj.text" placeholder="Phone Number"
                                            class="form-control input-md">

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="formObj.textinputEmail">Email</label>
                                    <div class="col-md-12">
                                        <input v-model="formObj.textinputEmail" id="formObj.textinputEmail" name="formObj.textinputEmail"
                                            type="formObj.text" placeholder="Email" class="form-control input-md">

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="formObj.textinputWebUrl">Web Site</label>
                                    <div class="col-md-12">
                                        <input v-model="formObj.textinputWebUrl" id="formObj.textinputWebUrl" name="formObj.textinputWebUrl"
                                            type="formObj.text" placeholder="Web Site" class="form-control input-md">

                                    </div>
                                </div>
                            </div>
                        </div>
                         </div>
                         <div id="social" class="container tab-pane  tab-pane fade">
                        <legend>  <h3>Social</h3></legend>
                        <div class="row">
                            <div class="form-group">
                                <label class="col-md-12 control-label" for="formObj.textinputfacebookUserName">facebook</label>
                                <div class="col-md-12">
                                    <input v-model="formObj.textinputfacebookUserName" id="formObj.textinputfacebookUserName"
                                        name="formObj.textinputfacebookUserName" type="formObj.text" placeholder="user name"
                                        class="form-control input-md">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12 control-label" for="formObj.textinputinstagramUserName">instagram</label>
                                <div class="col-md-12">
                                    <input v-model="formObj.textinputinstagramUserName" id="formObj.textinputinstagramUserName"
                                        name="formObj.textinputinstagramUserName" type="formObj.text" placeholder="user name"
                                        class="form-control input-md">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12 control-label" for="formObj.textinputyoutubeUserName">youtube</label>
                                <div class="col-md-12">
                                    <input v-model="formObj.textinputyoutubeUserName" id="formObj.textinputyoutubeUserName"
                                        name="formObj.textinputyoutubeUserName" type="formObj.text" placeholder="user name"
                                        class="form-control input-md">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12 control-label" for="formObj.textinputtiktokUserName">tiktok</label>
                                <div class="col-md-12">
                                    <input v-model="formObj.textinputtiktokUserName" id="formObj.textinputtiktokUserName"
                                        name="formObj.textinputtiktokUserName" type="formObj.text" placeholder="user name"
                                        class="form-control input-md">
                                </div>
                            </div>
                        </div>
                        </div>
                        <div id="templates" class="btn-group-toggle">

                            <div v-for="tab in formObj.Templates" >
                                <div @click="formObj.currentComponent = tab.name" class="btn btn-outline-primary">{{ tab.title }}</div>
                            
                            </div>
                            <!-- <div @click="formObj.currentComponent = 'Template1Vue'">Show Component One</div>
                            <div @click="formObj.currentComponent = 'Template2Vue'">Show Component Two</div>
                            <div @click="formObj.currentComponent = 'Template3Vue'">Show Component 3</div> -->
                        </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="card  col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">

                <div class="row">
                    <div class="col">
                        <component :is="formObj.currentComponent" v-bind="formObj"></component>

                    </div>
                </div>
                <!-- <input type="button" value="select table" @click="copyToClipboard( 'signature-preview');"/> -->
            </div>
        </div>
</template>
<script>
import Template1Vue from '../components/Solutions/EmailSignture/Template1.vue';
import Template2Vue from '../components/Solutions/EmailSignture/Template2.vue';
import Template3Vue from '../components/Solutions/EmailSignture/Template3.vue';
import Template4Vue from '../components/Solutions/EmailSignture/Template4.vue';
import Template5Vue from '../components/Solutions/EmailSignture/Template5.vue';

export default {
    name: 'imageUpload',
    components: {
    Template1Vue, Template2Vue,Template3Vue, Template4Vue,Template5Vue
  },
    data() {
        return {
            formObj:{
            
            selected: 'email-signature1',
            profilePictureSrc: 'https://www.w3schools.com/bootstrap/img_avatar4.png',
            businessPictureSrc: 'https://www.w3schools.com/bootstrap/img_avatar4.png',
            textinputFullName: 'Jhon Doe',
            textinputDescription: 'Web Developer',
            textinputAddress: '#2021, Lorem Ipsum',
            textinputPhoneNumber: '0987654321',
            textinputEmail: 'mail@example.com',
            textinputWebUrl: 'yourwebsite.com',
            textinputfacebookUserName: 'username',
            textinputinstagramUserName: 'username',
            textinputyoutubeUserName: 'username',
            textinputtiktokUserName: 'username',
            currentComponent: 'Template1Vue',
            Templates: [
              {name:"Template1Vue",title:"Modern"},
              {name:"Template2Vue",title:"Solid"},
              {name:"Template3Vue",title:"Profeshonal"},
              {name:"Template4Vue",title:"Besic"},
              {name:"Template5Vue",title:"Personal"}]
        }
    }
    },
    methods: {

        switchSelect(event) {
            this.formObj.selected = event.target.value;
        },
        selectImage() {
            this.$refs.fileInput.click()
        },
        uploadProfilePicture() {
            let input = this.$refs.fileProfilePictureInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.formObj.profilePictureSrc = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
        uploadbusinessPicture() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.formObj.businessPictureSrc = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
        copyToClipboard(containerId){
            var elem=document.getElementById(containerId);
            var targetId = "_hiddenCopyText_";
            var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
            var origSelectionStart, origSelectionEnd;
            if (isInput) {
                target = elem;
                origSelectionStart = elem.selectionStart;
                origSelectionEnd = elem.selectionEnd;
            } else {
                target = document.getElementById(targetId);
                if (!target) {
                    var target = document.createElement("textarea");
                    target.style.position = "absolute";
                    target.style.left = "-9999px";
                    target.style.top = "0";
                    target.id = targetId;
                    document.body.appendChild(target);
                }
                target.textContent = elem.innerHTML;
            }
            var currentFocus = document.activeElement;
            target.focus();
            target.setSelectionRange(0, target.value.length);
            var succeed;
            try {
                succeed = document.execCommand("copy");
            } catch (e) {
                succeed = false;
            }
            if (currentFocus && typeof currentFocus.focus === "function") {
                currentFocus.focus();
            }
 
            if (isInput) {
                elem.setSelectionRange(origSelectionStart, origSelectionEnd);
            } else {
                target.textContent = "";
            }
            return succeed;
        }

    },
    
};
</script>
<style>
.form-control {
    width: auto;
}
.card{
    padding: 20px;
}
.bg-primary {
    background-color: #2a5f98!important;
}
</style>