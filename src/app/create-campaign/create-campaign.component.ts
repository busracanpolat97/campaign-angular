import { Component } from '@angular/core';
import {CampaignService} from "../campaign.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {
  campaignTitle: string = '';
  campaignDescription: string = '';

  constructor(private campaignService: CampaignService, private router: Router, private toastr: ToastrService) {}

  createCampaign(): void {
    if (this.campaignTitle && this.campaignDescription) {
      this.campaignService.createCampaign(this.campaignTitle, this.campaignDescription);
      this.toastr.success('Kampanya başarılı bir şekilde eklenmiştir', 'Kampanya');
      this.router.navigate(['/list-campaigns']);
      console.log('Kampanya başarıyla oluşturuldu!');
    } else {
      console.log('Lütfen tüm alanları doldurun!');
    }
  }
}
