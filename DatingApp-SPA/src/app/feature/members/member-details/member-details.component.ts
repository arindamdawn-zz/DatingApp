import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/auth/models/User";
import { Photo } from "src/app/auth/models/Photo";
import { ImageItem, GalleryItem } from "@ngx-gallery/core";

@Component({
  selector: "app-member-details",
  templateUrl: "./member-details.component.html",
  styleUrls: ["./member-details.component.scss"]
})
export class MemberDetailsComponent implements OnInit {
  user: User;
  photos: GalleryItem[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
      this.user.photos.map(photo => {
        this.photos.push(new ImageItem({ src: photo.url, thumb: photo.url }));
      });
    });
  }
}
