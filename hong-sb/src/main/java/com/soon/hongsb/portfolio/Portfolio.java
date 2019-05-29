package com.soon.hongsb.portfolio;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "portfolio")
public class Portfolio {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    @Column
    private String category;
    @Column
    private String corp;
    @Column
    private String projectTitle;
    @Column
    private String projectIntro;
    @Column
    private String startDate;
    @Column
    private String endDate;
    @Column
    private String contents;
    @Column
    private String result;
    @Column
    private String detail1;
    @Column
    private String detail2;
    @Column
    private String detail3;
    @Column
    private String skill;
    @Column
    private String imgUrl;
    @Column
    private String useYn;
    @Column
    private int orderNo;

    public String getDetail2() {
        return detail2;
    }

    public void setDetail2(String detail2) {
        this.detail2 = detail2;
    }

    public String getDetail3() {
        return detail3;
    }

    public void setDetail3(String detail3) {
        this.detail3 = detail3;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCorp() {
        return corp;
    }

    public void setCorp(String corp) {
        this.corp = corp;
    }

    public String getProjectTitle() {
        return projectTitle;
    }

    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getProjectIntro() {
        return projectIntro;
    }

    public void setProjectIntro(String projectIntro) {
        this.projectIntro = projectIntro;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getDetail1() {
        return detail1;
    }

    public void setDetail1(String detail1) {
        this.detail1 = detail1;
    }

    public int getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(int orderNo) {
        this.orderNo = orderNo;
    }
}
