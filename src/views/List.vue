<template lang="tr">
    <div>
    <div class="d-flex justify-content-center" v-for="task in tasks" :key="task.id">
     <div class="col-6 mt-2">
        <b-card :title="task.subject">
            <b-card-text>
            {{task.description}}
            </b-card-text>

            <b-button variant="info" class="m-2" @click="updateTask(task.id)">Edit</b-button>
            <b-button variant="danger" @click="deleteTask(task.id)">Delete</b-button>
        </b-card>
     </div>
</div>
</div>
</template>
<script>
import { db } from "@/firebase/firebase.js";
export default {
    name: "List",
    data() {
        return {
            tasks: [],
        }
    },
    created() {
        this.getTask();
    },
    methods: {
        getTask() {
            this.tasks = [],
                db.collection("tasks").get().then(snapshot => {
                    snapshot.forEach(doc => {
                        let objTask = {};
                        objTask = doc.data();
                        objTask.id = doc.id;
                        this.tasks.push(objTask)
                    })
                }).catch(err => {
                    console.warn(err);
                })
        },
        updateTask(taskId) {
            this.$router.push({ name: "Update", params: { id: taskId } })
        },
        deleteTask(taskId) {
            db.collection("tasks").doc(taskId).delete().then(() => {
                this.getTask();
            }).catch(e => alert(e));
        }
    }
}
</script>
