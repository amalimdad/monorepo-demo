import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  standalone: true,
})
export class ButtonComponent {
  @Input() label= 'Click me';
  @Output() handleClick = new EventEmitter<void>();
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() loading = false;
}
