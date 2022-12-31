import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Comida } from 'src/app/Comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-foto-comidas',
  templateUrl: './foto-comidas.component.html',
  styleUrls: ['./foto-comidas.component.css']
})
export class FotoComidasComponent {
  @Input() btnText!: string;
  @Input() comidaData: Comida | null = null;

  constructor(
    private comidasService: ComidasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  comidaForm!: FormGroup;

  ngOnInit(): void {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.comidaForm = new FormGroup({
      _id: new FormControl(this.comidaData ? this.comidaData._id : ''),
      foto: new FormControl('')
    });
  }

  imageShow: any = '';
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imageShow = (<FileReader>event.target).result;
        this.comidaForm.patchValue({ foto: this.imageShow });
      }
    }
  }

  submit() {
    if (this.comidaForm.invalid) {
      return;
    }

    const _id = String(this.route.snapshot.paramMap.get('_id'));
    this.comidasService.updateComida(_id, this.comidaForm.value).subscribe();

    this.router.navigate(['/comidas']);
  }
}
