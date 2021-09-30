import { Component, OnInit } from '@angular/core';
import { Alunos } from 'src/app/modelo/alunos';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {
	
	aluno: Alunos;

	constructor() {
		this.aluno = new Alunos();
	}

  	ngOnInit(): void {
  	}
	
	Enviar() {
        console.log(this.aluno);
    }

}
