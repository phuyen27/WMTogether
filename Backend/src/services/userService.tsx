import {UserRepository} from "../repositories/user_repository";
import User from "../models/user";
import WatchHistory from "../models/watchHistory";

class UserService {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userId: string, username: string, email: string, avatarUrl?: string): Promise<User>{
        const newUser = new User();
        newUser.create(username, email, avatarUrl);
        return this.userRepository.create(newUser);
    }
    async getUser(userId: string) {
        return this.userRepository.get(userId);
    }
    async getUserByEmail(email: string) {
        return this.userRepository.getByEmail(email);
    }

    async updateUser(user: User) {
        try {
            await this.userRepository.update(user);
        } catch (error) {
            console.error("Error updating user:", error);
            throw new Error("Failed to update user");
        }
    }

    async addWatchHistory(userId: string, watchHistory: WatchHistory) {
        try {
            await this.userRepository.addWatchHistory(userId, watchHistory);
        }
        catch (error) {
            console.error("Error adding watch history:", error);
            throw new Error("Failed to add watch history");
        }
    }

    async getUserWatchHistory(userId: string) {
        return this.userRepository.getUserWatchHistory(userId);
    }
}

export default UserService;