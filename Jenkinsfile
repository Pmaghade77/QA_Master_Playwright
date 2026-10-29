
pipeline {
    agent any

    stages {
        stage('Check Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test --grep "@smoke" --project=chromium'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**, results.xml',
                allowEmptyArchive: true
            )
        }
    }
}
