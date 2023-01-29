pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente_01"
                    }
                    steps {
                        git url: 'https://github.com/MegaTC27/PruebasCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 1893406c-ed6a-40ed-b6a5-ae03f154ab69 --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente_02"
                    }
                    steps {
                        git url: 'https://github.com/MegaTC27/PruebasCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 1893406c-ed6a-40ed-b6a5-ae03f154ab69 --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente_03"
                    }
                    steps {
                        git url: 'https://github.com/RodrigoUdemy/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 1893406c-ed6a-40ed-b6a5-ae03f154ab69 --parallel'
                    
                    }
                }
                  
            }

             
        }

    }
            
}