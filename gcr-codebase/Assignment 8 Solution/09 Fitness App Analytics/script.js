let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        this.data = data;
    }

    getActiveUsers() {
        if (this.data.length === 0) {
            throw new Error("Dataset is empty!");
        }

        return this.data.filter(function(user) {
            return user.steps > 7000;
        });
    }

    getAverageCalories() {
        if (this.data.length === 0) {
            throw new Error("Dataset is empty!");
        }

        let total = this.data.reduce(function(sum, user) {
            return sum + user.calories;
        }, 0);

        return total / this.data.length;
    }

    getUserSummary() {
        if (this.data.length === 0) {
            throw new Error("Dataset is empty!");
        }

        return this.data.map(function(user) {
            return user.user + " completed " + user.steps + " steps and burned " + user.calories + " calories.";
        });
    }
}

let fitness = new FitnessAnalytics(workoutData);

let output = document.getElementById("result");

try {
    let activeUsers = fitness.getActiveUsers();

    output.innerHTML += "<h2>Active Users</h2>";

    activeUsers.forEach(function(user) {
        output.innerHTML += "<p>User: " + user.user + ", Steps: " + user.steps + "</p>";
    });

    let average = fitness.getAverageCalories();

    output.innerHTML += "<h2>Average Calories</h2>";
    output.innerHTML += "<p>" + average + "</p>";

    let summary = fitness.getUserSummary();

    output.innerHTML += "<h2>User Summary</h2>";

    summary.forEach(function(message) {
        output.innerHTML += "<p>" + message + "</p>";
    });

}

catch (error) {
    output.innerHTML += "<p>Error: " +
        error.message + "</p>";
}