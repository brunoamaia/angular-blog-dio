import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';
import { ResponseIBGE, NewsBody, ImageContent } from '../../services/api-models.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo = 'teste'
  newsInfo: NewsBody[];

  constructor(private listService: ListService) {
    this.newsInfo = [
      {
        id: 0,
        tipo: "",
        titulo: "",
        introducao: "",
        data_publicacao: "",
        produto_id: 0,
        produtos: "",
        editorias: "",
        imagens: "",
        structuredImages: {
          main: '',
          thumbnail: ''
        },
        produtos_relacionados: "",
        destaque: true,
        link: "",
      }
    ];
  }

  ngOnInit(): void {
    this.listService.getAll().subscribe({
      next: (response: ResponseIBGE) => {
        this.newsInfo = response.items;
        this.setImagesURL();
      },
      error: (error: any) => console.error(error),
      complete: () => console.log('Finished loading API data')
    });
  }

  setImagesURL() {
    const urlBase = 'https://agenciadenoticias.ibge.gov.br/'
    if (this.newsInfo.length > 1) {
      for (let index = 0; index < this.newsInfo.length; index++) {
        const imagem: ImageContent = JSON.parse(this.newsInfo[index].imagens);

        this.newsInfo[index].structuredImages = {
          thumbnail: `${urlBase}/${imagem.image_intro}`,
          main: `${urlBase}/${imagem.image_fulltext}`
        }
      }
    }
  }

}
