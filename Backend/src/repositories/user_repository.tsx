import User from "../models/user";
import WatchHistory from "../models/watchHistory";
import { collection, addDoc, getDoc, getDocs, setDoc, doc, Firestore } from "firebase/firestore";


interface UserRepository {
    create(user: User): Promise<User>;
    get(userId: string): Promise<User>;
    getByEmail(email: string): Promise<User>;
    update(user: User): Promise<void>;
    addWatchHistory(userId: string, watchHistory: WatchHistory): Promise<void>;
    getUserWatchHistory(userId: string): Promise<WatchHistory[]>;
}

class FireBaseUserRepository {
    private db: Firestore;
    constructor(db : Firestore) {
        this.db = db;
    }

    async create(user: User): Promise<User> {
        try {
            const docRef = await addDoc(collection(this.db, "users"), user);
            console.log("Document written with ID:", docRef.id);
            return user;
        } catch (e) {
            console.error("Error adding document:", e);
            throw new Error("Error creating user");
        }
    }

    async get(userId: string): Promise<User> {
        const userDoc = await getDoc(doc(this.db, "users", userId));
        if (userDoc.exists()) {
            return userDoc.data() as User;
        } else {
            throw new Error(`User with ID ${userId} not found`);
        }
    }

    async getByEmail(email: string): Promise<User> {
        const userDoc = await getDoc(doc(this.db, "users", email));
        if (userDoc.exists()) {
            return userDoc.data() as User;
        }
        return userDoc.data() as User;
    }

    async update(user: User) {
        const userRef = doc(this.db, "users", user.userId);
        await setDoc(userRef, user);
    }

    async addWatchHistory(userId: string, watchHistory: WatchHistory) {
        const watchHistoryRef = collection(this.db, "users", userId, "watchHistory");
        await addDoc(watchHistoryRef, watchHistory);
    }

    async getUserWatchHistory(userId: string) {
        const watchHistoryRef = collection(this.db, "users", userId, "watchHistory");
        const watchHistory = await getDocs(watchHistoryRef);
        return watchHistory.docs.map(doc => doc.data() as WatchHistory);
    }
}

export type { UserRepository };
export default FireBaseUserRepository;