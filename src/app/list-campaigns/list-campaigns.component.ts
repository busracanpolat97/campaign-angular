import { Component } from '@angular/core';
import {CampaignService} from "../campaign.service";
import {ToastrService} from "ngx-toastr";
import {Campaign} from "../model/campaign.model";

@Component({
  selector: 'app-list-campaigns',
  templateUrl: './list-campaigns.component.html',
  styleUrls: ['./list-campaigns.component.scss']
})
export class ListCampaignsComponent {
  campaigns: Campaign[] = [];
  showUpdateModal = false;

  constructor(
    private campaignService: CampaignService,
    private toastr: ToastrService) {
    this.campaigns = this.campaignService.getAllCampaigns();
  }

  openUpdateModal(campaign: Campaign): void {
    this.showUpdateModal = true;
  }

  increasePoints(campaign: any): void {
    this.campaignService.increasePoints(campaign);
    this.toastr.success('Kampanya puanı arttırıldı', 'Kampanya');
  }

  decreasePoints(campaign: any): void {
    this.campaignService.decreasePoints(campaign);
    this.toastr.warning('Kampanya puanı azaltıldı', 'Kampanya');
  }

  deleteCampaign(campaign: any): void {
    this.campaignService.deleteCampaign(campaign);
    this.campaigns = this.campaignService.getAllCampaigns();
    this.toastr.error('Kampanya silindi', 'Kampanya');
  }
}
