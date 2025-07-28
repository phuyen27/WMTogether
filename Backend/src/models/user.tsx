import watchHistory from "./watchHistory";

class User {
    public userId: string;
    username: string;
    email: string;
    role: string;
    avatarUrl: string;
    createdAt: Date;
    watchHistory: watchHistory[];

    public create(userId: string, username: string, email: string, avatarUrl?: string) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.avatarUrl = avatarUrl? avatarUrl : "";
        this.createdAt = new Date();
        this.watchHistory = [];
        this.role = "user";
    }
}

export default User;