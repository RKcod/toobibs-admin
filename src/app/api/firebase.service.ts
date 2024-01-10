import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
// @ts-ignore
import * as firebase from 'firebase/app';
import 'firebase/storage';

export class FileUpload {

    key: string;
    name: string;
    url: string;
    file: File;

    constructor(file: File) {
        this.file = file;
    }
}

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    private snapshotChangesSubscription: any;

    private basePath = '/uploads';

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth
    ) {
    }


    getAlldataByField(table, field, value) {
        return new Promise<any>((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table, ref => ref.where(field, '==', value)).valueChanges({idField: 'dataId'})
                .subscribe(snapshots => {
                    resolve(snapshots);
                }, err => {
                    reject(err);
                });
        });
    }

    getAlldata(table) {
        return new Promise<any>((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table).valueChanges({idField: 'dataId'})
                .subscribe(snapshots => {
                    resolve(snapshots);
                }, err => {
                    reject(err);
                });
        });
    }

    getAllSubData(table1, id, table2) {
        return new Promise<any>((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table1).doc(id).collection(table2).valueChanges({idField: 'dataId'})
                .subscribe(snapshots => {
                    resolve(snapshots);
                }, err => {
                    reject(err);
                });
        });
    }


    getDataById(table, id) {
        return new Promise<any>((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table).doc(id).valueChanges()
                .subscribe(snapshots => {
                    resolve(snapshots);
                }, err => {
                    reject(err);
                });
        });
    }

    deleteData(table, id) {
        return new Promise<any>((resolve, reject) => {
            this.afs.collection(table).doc(id).delete()
                .then(
                    res => resolve(res),
                    err => reject(err)
                );
        });
    }


    createData(table, value, id) {
        return new Promise<any>((resolve, reject) => {
            if (id == null) {
                //value.id = this.generator();
                value.date_saved = new Date().toLocaleString();
                this.afs.collection(table).add(value)
                    .then(
                        res => resolve(res),
                        err => reject(err)
                    );
            } else {
                this.afs.collection(table).doc(id).update(value)
                    .then(
                        res => resolve(res),
                        err => reject(err)
                    );
            }

        });
    }

    pushFileToStorage(fileUpload: FileUpload, callback) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // in progress
                //const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                //progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
                // fail
                console.log(error);
            },
            () => {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    console.log('File available at', downloadURL);
                    fileUpload.url = downloadURL;
                    fileUpload.name = fileUpload.file.name;
                    callback(downloadURL);
                });
            }
        );
    }
}
