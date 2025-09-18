import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KaramService } from '../../api';

@Component({
  selector: 'app-command-line',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './command-line.component.html',
  styleUrl: './command-line.component.scss'
})

export class CommandLineComponent {
  currentCommand: string = ''; // Input for the current command
  history: { command: string; output: string }[] = []; // Command history

  constructor(private service: KaramService) {}

  executeCommand() {
    const command = this.currentCommand.trim();
    if (!command) return;

    // Add "Processing..." to the history
    this.history.push({ command, output: 'Processing...' });

    // Call the API to process the command
    this.service.apiKaramProcessQueryPost(command.toLowerCase()).subscribe( (result: any) => {
        // Update history with the server response
        console.log(result);
        this.updateCommandOutput(command, result.answer);
      
    });

    // Clear the input field
    this.currentCommand = '';
  }

  private updateCommandOutput(command: string, output: string) {
    const historyIndex = this.history.findIndex((entry) => entry.command === command && entry.output === 'Processing...');
    if (historyIndex !== -1) {
      this.history[historyIndex].output = output;
    }
  }
}
