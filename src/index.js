import CommandLine from './CommandLine'

const commandLine = new CommandLine()

const questions = commandLine.handleQuestions()
commandLine.runQuestions(questions)
