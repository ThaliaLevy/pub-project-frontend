import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Bebida } from 'src/app/Bebida';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-foto-bebidas',
  templateUrl: './foto-bebidas.component.html',
  styleUrls: ['./foto-bebidas.component.css']
})
export class FotoBebidasComponent {
  @Input() btnText!: string;
  @Input() bebidaData: Bebida | null = null;
  
  tamanhoExcedido: string = '';

  constructor(
    private bebidasService: BebidasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  bebidaForm!: FormGroup;

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.bebidaForm = new FormGroup({
      _id: new FormControl(this.bebidaData ? this.bebidaData._id : ''),
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
          this.bebidaForm.patchValue({ foto: this.imageShow });
        }
      }
    }
  }

  submit() {
    if (this.bebidaForm.invalid) {
      return;
    }

    const _id = String(this.route.snapshot.paramMap.get('_id'));
    this.bebidasService.updateBebida(_id, this.bebidaForm.value).subscribe();

    location.replace('/bebidas');
  }
}
