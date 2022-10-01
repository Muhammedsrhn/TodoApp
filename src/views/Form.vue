<template>
    <div>
        <b-form class="mt-2">
            <b-row>
                <b-col class="col-6 offset-sm-3">
                    <b-form-group label="Duty" label-for="Subject">
                        <b-form-input id="subject" v-model="form.subject" type="text" placeholder="Enter Duty" required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="description" label="Description" label-for="input-2">
                        <b-form-textarea id="description" v-model="form.description" placeholder="Enter description"
                            required>
                        </b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" @click="saveTask" variant="primary" class="x">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-col>
            </b-row>
        </b-form>

    </div>
</template>
  
<script>
import { db } from '@/firebase/firebase';

export default {
    name: "Form",
    data() {
        return {
            form: {
                subject: "",
                description: "",
            }
        }
    },
    methods: {
        saveTask() {
            db.collection("tasks").add(this.form).then(() => {
                this.clearForm();
                this.$router.push({ name: "list" })
            });
        },
        clearForm() {
            this.form.subject = "";
            this.form.description = "";
        }
    }
}
</script>


<style>
.x {
    margin-right: 10px;
}
</style>