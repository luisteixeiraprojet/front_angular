import { BetweenComponentsService } from './../services/between-components.service';
import { MaterialsService } from './../services/materials.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Script } from 'vm';

@Component({
  selector: 'app-all-materials',
  templateUrl: './all-materials.component.html',
  styleUrls: ['./all-materials.component.css']
})
export class AllMaterialsComponent implements OnInit {

  materials : any;

  constructor(private _router: Router, private _betweenService: BetweenComponentsService,private _matService:MaterialsService ) { }

  async ngOnInit() {

    this.materials = await this._matService.getAllMaterials();
  }
//____________________________________________
  updateMat(matToUpdate){
    console.log("update");
    this._betweenService.receiveObjectToUpdate(matToUpdate);
    this._router.navigate(['/updatematerial/' + matToUpdate._Id_material]);

  }
//____________________________________________
  async deleteMat(matId){
    console.log("delete ");
    let bool;
      bool = confirm("Êtes-vous sûr de vouloir supprimer ce matériel de votre liste?");
      if(bool == true){
        await this._matService.deleteMat(matId)
        this.materials = await this._matService.getAllMaterials();
    }
  }
//_____________________________________________





}//closes class
