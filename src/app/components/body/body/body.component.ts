import { Component, OnInit, Input } from '@angular/core';
// Services
import { SeamnticSearchService } from '../../../services/SemanticSearchService/semanticsearch.service';
import { SkillService } from '../../../services/SkillService/skill.service';
// Models
import { Profile } from '../../../models/Profil/profil';
import { Skill } from '../../../models/Skill/Skill';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  profiles: Profile[];
  skill: string;

  constructor(
    private semanticSearchService: SeamnticSearchService,
    private skillService: SkillService) { }

  ngOnInit(): void {
    this.profiles = this.semanticSearchService.search();
  }

  addSkill() {
    let toBeAddedSkill = new Skill();
    toBeAddedSkill.name = this.skill;
    this.skillService.addSkill(toBeAddedSkill);
  }

  removeSkill(skill: string) {
    this.skillService.removeSkill(skill);
  }

  resetSkills() {
    this.skillService.resetAll();
  }
}