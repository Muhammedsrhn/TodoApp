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
                    <b-button type="submit" @click="updateTask" variant="primary" class="x">Update</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
  
<script>
import { db } from '@/firebase/firebase';

export default {
    name: "Update",
    data() {
        return {
            form: {
                id: "",
                subject: "",
                description: "",
            }
        }
    },
    created() {
        this.form.id = this.$route.params.id;
        console.log(this.form.id)
        if (this.form.id) {
            db.collection("tasks").doc(this.form.id).get().then(snapshot => {
                const task = snapshot.data();
                this.form.subject = task.subject;
                this.form.description = task.description;
            })
        }
    },
    methods: {
        updateTask() {
            db.collection("tasks").doc(this.form.id).set(this.form).then(() => {
                this.$router.push({ name: "list" })
            })
        }
    }
}
</script>


<style>
.x {
    margin-right: 10px;
}
</style>