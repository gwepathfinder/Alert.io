
        const alerts = {
            fire: {
                message: "Fire, Please proceed to the exits.",
                sound: "fireSound"
            },
            armedRobbery: {
                message: "Active action in progress, please stay where you are. Help is coming.",
                sound: "robberySound"
            },
            earthquake: {
                message: "Earthquake detected, stay away from structures.",
                sound: "earthquakeSound"
            }
    
        };

        function triggerAlert(alertType) {
            const alert = alerts[alertType];
            document.getElementById("alertMessage").textContent = alert.message;
            const sound = document.getElementById(alert.sound);
            sound.play();
        }
        
        document.getElementById('year').textContent = new Date().getFullYear();
