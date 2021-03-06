import { Component } from '@angular/core';
import { FaqService } from './faq.service';
import { FAQ } from './faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  providers: [FaqService]
})
export class FaqComponent {

  faqs: FAQ[];

  constructor(private faqService: FaqService) {
    this.faqs = faqService.faqs;
  }

  filter(searchValue: string) {

    if(searchValue === '')
    {
      this.faqs = this.faqService.faqs;
    }
    else{
      this.faqs = this.faqService.faqs.filter((faqs: FAQ) => faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||  faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 );
    }
  }

}
