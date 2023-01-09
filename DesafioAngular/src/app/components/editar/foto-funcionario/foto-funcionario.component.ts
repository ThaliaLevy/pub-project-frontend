import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Funcionario } from 'src/app/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-foto-funcionario',
  templateUrl: './foto-funcionario.component.html',
  styleUrls: ['./foto-funcionario.component.css']
})
export class FotoFuncionarioComponent {
  @Input() btnText!: string;
  @Input() funcionarioData: Funcionario | null = null;
  
  tamanhoExcedido: string = '';

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  funcionarioForm!: FormGroup;

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.funcionarioForm = new FormGroup({
      _id: new FormControl(this.funcionarioData ? this.funcionarioData._id : ''),
      foto: new FormControl('')
    });
  }

  imageShow: any = '';
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]

      if (foto.size > 100000) {
        this.tamanhoExcedido = 'Tamanho de imagem excedido (Máximo: 100kB).';
        console.log(foto.size)
      } else {
        this.tamanhoExcedido = '';

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
          this.imageShow = (<FileReader>event.target).result;
          this.funcionarioForm.patchValue({ foto: this.imageShow });
        }
      }
    }
  }

  submit() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    const _id = String(this.route.snapshot.paramMap.get('_id'));
    this.funcionariosService.updateFuncionario(_id, this.funcionarioForm.value).subscribe();

    location.replace('/funcionarios');
  }
}
