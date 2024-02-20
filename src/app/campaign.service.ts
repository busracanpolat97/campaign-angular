import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private campaigns: any[] = [];

  constructor() {
    const storedCampaigns = localStorage.getItem('campaigns');
    if (storedCampaigns) {
      this.campaigns = JSON.parse(storedCampaigns);
    }
  }

  createCampaign(title: string, description: string): void {
    const newCampaign = {
      title: title,
      description: description,
      points: 0,
      date: new Date().toLocaleDateString()
    };
    this.campaigns.push(newCampaign);
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  getAllCampaigns(): any[] {
    return this.campaigns;
  }

  increasePoints(campaign: any): void {
    campaign.points++;
    this.updateLocalStorage();
  }

  decreasePoints(campaign: any): void {
    campaign.points--;
    this.updateLocalStorage();
  }

  deleteCampaign(campaign: any): void {
    const index = this.campaigns.indexOf(campaign);
    if (index !== -1) {
      this.campaigns.splice(index, 1);
      this.updateLocalStorage();
    }
  }
  updateCampaign(campaign: any): void {
    const index = this.campaigns.findIndex(campaign => campaign.id === campaign.id);
    if (index !== -1) {
      this.campaigns[index] = campaign;
      this.updateLocalStorage();
    } else {
      console.error('Kampanya bulunamadı!');
    }
  }
  private updateLocalStorage(): void {
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }
}
