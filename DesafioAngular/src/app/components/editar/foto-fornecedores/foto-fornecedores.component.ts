import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Fornecedor } from 'src/app/Fornecedor';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-foto-fornecedores',
  templateUrl: './foto-fornecedores.component.html',
  styleUrls: ['./foto-fornecedores.component.css']
})
export class FotoFornecedoresComponent {
  @Input() btnText!: string;
  @Input() fornecedorData: Fornecedor | null = null;

  tamanhoExcedido: string = '';

  constructor(
    private fornecedoresService: FornecedoresService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  fornecedorForm!: FormGroup;

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.fornecedorForm = new FormGroup({
      _id: new FormControl(this.fornecedorData ? this.fornecedorData._id : ''),
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
          this.fornecedorForm.patchValue({ foto: this.imageShow });
        }
      }
    }
  }

  submit() {
    if (this.fornecedorForm.invalid) {
      return;
    }

    const _id = String(this.route.snapshot.paramMap.get('_id'));
    this.fornecedoresService.updateFornecedor(_id, this.fornecedorForm.value).subscribe();

    location.replace('/fornecedores');
  }
}
