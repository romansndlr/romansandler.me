import { Application } from '@hotwired/stimulus'
import { DarkModeController } from './controllers/dark-mode-controller'

const application = Application.start()

application.register('dark-mode', DarkModeController)
