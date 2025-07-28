import {UserRepository} from "../repositories/user_repository";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import {admin, app} from "../../database/firebase.js"
import { Auth } from "firebase/auth";
import User from "../models/user";
import user from "../models/user";
import UserService from "./userService";

class AuthenticationService {
    userService: UserService;
    auth: Auth

    constructor(userService: UserService) {
        this.userService = userService;
        this.auth = getAuth(app)
    }

    async signUp(username: string, email: string, avatarUrl: string, password: string): Promise<string> {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            const userId = userCredential.user.uid;
            const currentUser = await this.userService.createUser(
                userId,
                email,
                username,
                avatarUrl
            );
            
            admin.auth().setCustomUserClaims(userCredential.user.uid, {
                userId: currentUser.userId,
                username: currentUser.username,
                role: currentUser.role,
                email: currentUser.email,
            }).then()

            console.log("User signed up:", user);

            return userCredential.user.getIdToken()
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    }

    async signIn(email, password): Promise<string> {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            const user = userCredential.user;

            return user.getIdToken(true);
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    }

    async signOut() {
        signOut(this.auth).then(() => {
            console.log("User signed out");
        }).catch((error) => {
            console.error("Logout error:", error.message);
        });
    }


    async verifyToken(idToken: string): Promise<{ uid: string, decodedToken: any }> {
        try {
            const currentUser = this.auth.currentUser;
            if (!currentUser) {
                throw new Error('No authenticated user');
            }

            const tokenResult = await currentUser.getIdTokenResult();
            if (tokenResult.token !== idToken) {
                throw new Error('Invalid token');
            }

            return { 
                uid: currentUser.uid, 
                decodedToken: {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    ...tokenResult.claims
                }
            };
        } catch (error) {
            console.error("Error verifying token:", error.message);
            throw error;
        }
    }

}

export default AuthenticationService;